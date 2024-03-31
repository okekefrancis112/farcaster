import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const id:any = searchParams.get("id")
  const idAsNumber = parseInt(id)
  const data = await req.json()
  const btn_id = data.untrustedData.buttonIndex;

  console.log("btn_id>>>>>>>>>>>>>>>>>>>>", btn_id)

  // const nextId = idAsNumber + 2


  if (idAsNumber === 2) {
    return new NextResponse(`<!DOCTYPE html>
    <html>
    <head>
      <title> Know your CQT token </title>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmT5Lu2hiS9eZ2evhPz3AW4RPw83rT2xUoYYubWUMwXUfu/${idAsNumber}.png" />
      <form method="POST" action="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame">
        <input type="hidden" name="id" value="7">
        <button type="submit" name="action" value="proceed">Proceed</button>
      </form>
      <form method="POST" action="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame">
        <input type="hidden" name="id" value="0">
        <button type="submit" name="action" value="restart">Restart</button>
      </form>
      <script>
        function handleAction(action) {
          if (action === 'proceed') {
            window.location.href = '${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=7';
          } else if (action === 'restart') {
            window.location.href = '${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=5';
          }
        }
      </script>
    </head>
    <body>
      <button onclick="handleAction('proceed')">Proceed</button>
      <button onclick="handleAction('restart')">Restart</button>
    </body>
    </html>
    `);
} else if (idAsNumber === 5) {
    return new NextResponse(`<!DOCTYPE html><html><head>
      <title>This is Wrong</title>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmT5Lu2hiS9eZ2evhPz3AW4RPw83rT2xUoYYubWUMwXUfu/${idAsNumber}.png" />
      <meta property="fc:frame:button:1" content="Retry" />
      <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${0}" />
    </head></html>`);
} else if (idAsNumber === 7) {
    return new NextResponse(`<!DOCTYPE html><html><head>
      <title>This is frame ${idAsNumber}</title>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmT5Lu2hiS9eZ2evhPz3AW4RPw83rT2xUoYYubWUMwXUfu/${idAsNumber}.png" />
      <meta property="fc:frame:button:1" content="Next Page" />
      <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${4}" />
    </head></html>`);
} else if (idAsNumber === 4) {
    return new NextResponse(`<!DOCTYPE html><html><head>
      <title>This is frame ${idAsNumber}</title>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmT5Lu2hiS9eZ2evhPz3AW4RPw83rT2xUoYYubWUMwXUfu/${idAsNumber}.png" />
      <meta property="fc:frame:button:1" content="A" />
      <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${6}" />
      <meta property="fc:frame:button:2" content="B" />
      <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${5}" />
    </head></html>`);
} else if (idAsNumber === 6) {
    return new NextResponse(`<!DOCTYPE html><html><head>
      <title>This is frame ${idAsNumber}</title>
      <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmT5Lu2hiS9eZ2evhPz3AW4RPw83rT2xUoYYubWUMwXUfu/${idAsNumber}.png" />
      <meta property="fc:frame:button:1" content="A" />
      <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${15}" />
      <meta property="fc:frame:button:2" content="B" />
      <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${5}" />
    </head></html>`);
} else if (idAsNumber === 15) {
    return new NextResponse(`<!DOCTYPE html><html><head>
      <title>This is frame ${idAsNumber}</title>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmT5Lu2hiS9eZ2evhPz3AW4RPw83rT2xUoYYubWUMwXUfu/${idAsNumber}.png" />
      <meta property="fc:frame:button:1" content="Cosmic Cowboys" />
      <meta property="fc:frame:button:1:action" content="post_redirect" />
      <meta property="fc:frame:button:2" content="Blog post Tutorial" />
      <meta property="fc:frame:button:2:action" content="post_redirect" />
      <meta property="fc:frame:button:3" content="Video Tutorial" />
      <meta property="fc:frame:button:3:action" content="post_redirect" />
      <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
    </head></html>`);
} else {
    return new NextResponse(`<!DOCTYPE html><html><head>
      <title>This is frame 7</title>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmT5Lu2hiS9eZ2evhPz3AW4RPw83rT2xUoYYubWUMwXUfu/7.png" />
      <meta property="fc:frame:button:1" content="Cosmic Cowboys" />
  <meta property="fc:frame:button:1:action" content="post_redirect" />
  <meta property="fc:frame:button:2" content="Blog post Tutorial" />
  <meta property="fc:frame:button:2:action" content="post_redirect" />
  <meta property="fc:frame:button:3" content="Video Tutorial" />
  <meta property="fc:frame:button:3:action" content="post_redirect" />
  <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
</head></html>`);
}

}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
