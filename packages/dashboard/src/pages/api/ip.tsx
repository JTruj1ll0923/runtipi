export default function handler(_: any, res: any) {
  const { INTERNAL_IP } = process.env;

  res.status(200).json({ ip: INTERNAL_IP });
}
