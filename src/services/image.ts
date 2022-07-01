import sharp, { FormatEnum } from 'sharp'

export default class ImageHandler {
	static async resize(file: Buffer, width: number, height: number): Promise<Buffer> {
		return await sharp(file)
			.resize(width as number, height as number)
			.toBuffer()
	}
	static async rotate(file: Buffer, angle: number | undefined): Promise<Buffer> {
		return await sharp(file).rotate(angle).toBuffer()
	}
	static async flip(file: Buffer, direction: boolean | undefined): Promise<Buffer> {
		return await sharp(file).flip(direction).toBuffer()
	}
	static async toFile(buffer: Buffer, filePath: string): Promise<sharp.OutputInfo> {
		return await sharp(buffer).toFile(filePath)
	}
	static async blur(file: Buffer, sigma?: number): Promise<Buffer> {
		return await sharp(file).blur(sigma).toBuffer()
	}
	static async sharpen(file: Buffer, sigma?: number): Promise<Buffer> {
		return await sharp(file).sharpen(sigma).toBuffer()
	}
	static async metadata(file: string): Promise<sharp.Metadata> {
		return await sharp(file).metadata()
	}
	static async toFormat<T extends keyof FormatEnum>(file: Buffer, format: T = 'jpg' as T): Promise<Buffer> {
		return await sharp(file).toFormat(format).toBuffer()
	}
}
