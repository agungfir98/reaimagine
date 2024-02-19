/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "loremflickr.com",
			},
			{
				hostname: "avatars.githubusercontent.com",
			},
		],
	},
};

export default nextConfig;
