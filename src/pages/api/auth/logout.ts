import { NextApiRequest, NextApiResponse } from 'next';

export default function logout(req: NextApiRequest, res: NextApiResponse) {
  req.statusCode == 200;
  res.redirect('/');
}
