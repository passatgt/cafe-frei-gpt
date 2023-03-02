import { OpenAIStream, OpenAIStreamPayload } from "../../utils/OpenAIStream";

if (!process.env.OPENAI_API_KEY) {
	throw new Error("Missing env var from OpenAI");
}

export const config = {
	runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
	const prompt = `Generate 2 additional coffee names based on the following examples in hungarian:
		Amszterdami brandy-kávé, karamellizált naranccsal
		Brazil Single Origin Cerrado Natural
		Afrika citrusos ízvilága Cappuccino Tradizionale
		Nicaraguai dohány-kávé almával
		Közép-Amerika ízvilága Espresso Superiore
		Kolumbiai koffeinmentes Caldas Caturra
		Kolumbiai Single Origin Caturra Exelso
		Konyakmeggyes bonbon-kávé, mandulás csokoládéval
		Miami Beachi vanília-kávé, fahéjas szerecsendióval
		Római mogyoró-kávé "Nocciola Romana"
		Tokiói málna-kávé, csokoládéval
	`;

	const payload: OpenAIStreamPayload = {
		model: "gpt-3.5-turbo",
		messages: [{ role: "user", content: prompt }],
		temperature: 0.8,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
		max_tokens: 200,
		stream: true,
		n: 1,
	};

	const stream = await OpenAIStream(payload);
	return new Response(stream);
};

export default handler;
