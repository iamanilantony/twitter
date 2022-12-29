import React, { useState } from 'react';
import { object, string } from 'zod';
import { trpc } from '../utils/trpc';

export const tweetSchema = object({
    text: string({
        required_error: "Tweet text is required",
    })
        .min(10)
        .max(280),
})


const CreateTweet = () => {
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const { mutateAsync } = trpc.tweet.create.useMutation();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await tweetSchema.parse({ text })
        }
        catch (err: any) {
            setError(err.message);
            return;
        }
        mutateAsync({ text })
    }
    return (
        <>
            {error && (<div>{error}</div>)}
            <div>
                <form onSubmit={handleSubmit}
                    className="w-full flex flex-col mb-4 rounded-md border-2 p-4"
                >
                    <textarea onChange={(e) => setText(e.target.value)} className="shadow w-full p-4">
                        Enter your tweet
                    </textarea>
                    <div className='mt-4 flex justify-end'>
                        <button type='submit' className="bg-primary rounded-md px-4 py-2 text-white">Tweet</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateTweet