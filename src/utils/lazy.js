document.addEventListener('DOMContentLoaded', function () {
	const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))

	if ('IntersectionObserver' in window) {
		const lazyImageObserver = new IntersectionObserver(function (
			entries,
			observer
		) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					const lazyImage = entry.target
					lazyImage.src = lazyImage.dataset.src
					lazyImage.srcset = lazyImage.dataset.srcset
					lazyImage.classList.remove('lazy')
					lazyImageObserver.unobserve(lazyImage)
				}
			})
		})

		lazyImages.forEach(function (lazyImage) {
			lazyImageObserver.observe(lazyImage)
		})
	} else {
		// Possibly fall back to event handlers here
	}
})
