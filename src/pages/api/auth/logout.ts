import { NextApiRequest, NextApiResponse } from 'next';

export default function logout(_: NextApiRequest, res: NextApiResponse) {
  res.redirect('/');
}
