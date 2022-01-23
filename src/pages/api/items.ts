// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { IItem } from '@/interfaces/item';
import items from '@/mock/items.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<IItem[]>) {
  res.status(200).json(items);
}
