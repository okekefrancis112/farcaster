import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmT5Lu2hiS9eZ2evhPz3AW4RPw83rT2xUoYYubWUMwXUfu/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=2`,
});

const frameMetadata1 = getFrameMetadata({
  buttons: [
    {
      label: "Restart"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmT5Lu2hiS9eZ2evhPz3AW4RPw83rT2xUoYYubWUMwXUfu/oops.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=0`,
});


export const metadata: Metadata = {
  title: 'Scavenger Hunt',
  description: 'A fun game for all Data Alchemist.',
  openGraph: {
    title: 'Scavenger Hunt',
    description: 'A fun game for all Data Alchemist.',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmT5Lu2hiS9eZ2evhPz3AW4RPw83rT2xUoYYubWUMwXUfu/0.png`],
  },
  other: {
    ...frameMetadata,
    ...frameMetadata1,
  },
};

export default function Page() {
  return (
    <>
      <h1>Scavenger Hunt</h1>
    </>
  );
}
