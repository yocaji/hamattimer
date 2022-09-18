import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export default async function handler(req, res) {
  const { image, options={} } = JSON.parse(req.body)

  const results = await cloudinary.uploader.upload(image, options)

  res.status(200).json(results)
}
