import { getSession } from 'next-auth/client';

export default async (req, res) => {
    try {
        const session = await getSession({ req });
        if (!session) {
            throw new Error('No session found');
        }
        const { code, state } = req.query;
        if (!code || !state) {
            throw new Error('Missing code or state');
        }
        res.status(200).json({ message: 'Callback handled successfully' });
    } catch (error) {
        console.error('Error handling callback:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};