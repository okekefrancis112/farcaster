import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmdPQLHKJw6MySDyafxe95AZGSDsfyvBwsQYMvfbWXixxn/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Covalent Gallery',
  description: 'Spreading the word, one person at a time.',
  openGraph: {
    title: 'Covalent Gallery',
    description: 'Spreading the word, one person at a time..',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmdPQLHKJw6MySDyafxe95AZGSDsfyvBwsQYMvfbWXixxn/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Covalent Gallery</h1>
    </>
  );
}
