import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;


import { error } from '@sveltejs/kit';

export function load({ params }) {

  /*
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) throw error(404)
  */
  return { slug: params.slug }
}
