/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/cosmiccowboys',
        destination: 'https://cosmiccowboys.cloud', // covalent website
        permanent: false
      },
      {
        source: '/pinatacloud',
        destination: 'https://www.pinata.cloud/blog/how-to-make-a-frame-on-farcaster-using-ipfs',  // covalent doc
        permanent: false
      },
      {
        source: '/video',
        destination: 'https://youtu.be/wUt5NjXHSO4',  // covalent twitter
        permanent: false
      }
    ]
  }
};

export default nextConfig;
