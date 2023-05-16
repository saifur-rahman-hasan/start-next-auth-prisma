import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import sha256 from "crypto-js/sha256";
import { logger } from "../../../lib/logger";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "POST") {
        await handlePOST(res, req);
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
        );
    }
}

const hashPassword = (password: string) => {
    return sha256(password).toString();
};

// POST /api/user
async function handlePOST(res, req) {
    const { name, email, password } = req.body;
    const hashedPassword = hashPassword(password);

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        console.log(`existingUser`)

        if (existingUser) {
            throw new Error("Email already exists");
        }

        logger.debug("creating user", {
            ...req.body,
            password: hashPassword(req.body.password),
        });

        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword }
        });

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error?.message || 'Failed to create user' });
    }
}