export { ImgApiSource, ImgSource }

declare global {
    type ImgSource = "original" | "small" | "medium" | "large" | "large2x"
    interface ImgApiSource {
        src: ImgSource
        alt: string
        width: number
        height: number
    }
}
