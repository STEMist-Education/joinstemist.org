import { useEffect } from "react"
import Navbar from "./Navbar"

export default function Container({ children }: { children: React.ReactNode }) {
	//
	useEffect(() => {
		window.onhashchange = (e) => {
			window.history.replaceState("", document.title, e.oldURL)
		}
	}, [])
	useEffect(() => {
		if (process.env.NODE_ENV !== "production") {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (
							entry.isIntersecting &&
							!entry.target.classList.contains("card-animate")
						) {
							setTimeout(() => entry.target.classList.add("card-animate"), 100)
						}
					})
				},
				{
					threshold: 0.5,
				},
			)
			document.querySelectorAll(".card").forEach((elem) => {
				observer.observe(elem)
			})
			return () => {
				document
					.querySelectorAll(".card")
					.forEach((elem) => observer.unobserve(elem))
			}
		}
	}, [])
	useEffect(() => {
		let mainNavLinks = document.querySelectorAll("nav ul li a")
		const callback = () => {
			let fromTop = window.scrollY

			mainNavLinks.forEach((link) => {
				let section: HTMLElement = document.querySelector(
					link.getAttribute("href")!,
				)!
				if (
					section!.offsetTop <= fromTop + 56.286 &&
					section.offsetTop + section.offsetHeight >= fromTop + 56.286
				) {
					link.parentElement?.classList.add("underline")
				} else {
					link.parentElement?.classList.remove("underline")
				}
			})
		}
		window.addEventListener("scroll", callback)
		return () => window.removeEventListener("scroll", callback)
	}, [])
	return (
		<div className="mx-auto h-[10000px]">
			<Navbar className="sm:px-6 lg:px-6 px-2 w-full z-50 fixed bg-gradient-to-r from-slate-200 to-slate-300" />
			<div className="sm:px-6 max-w-[100rem] mx-auto px-2 lg:px-6 overflow-hidden">
				{children}
			</div>
		</div>
	)
}
