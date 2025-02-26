import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

const mockPosts = [
    { id: 1, slug: 'test', title: 'Test', date: 'April 9, 2024' },
    { id: 2, slug: 'test', title: 'Test', date: 'April 9, 2024' },
    { id: 3, slug: 'test', title: 'Test', date: 'April 9, 2024' },
];

export default function HomePage() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="My Portfolio" />
            <div className="flex min-h-screen flex-col items-center bg-[#0a0a0a] p-6 text-[#EDEDEC] lg:p-8">
                <header className="mb-6 w-full max-w-xl text-sm">
                    <nav className="flex items-center justify-between">
                        <div className="flex gap-4">
                            <Link href={"#"} className="text-sm leading-normal text-[#1b1b18] dark:border-[#3E3E3A] dark:text-[#EDEDEC]">home</Link>
                            <Link href={"#"} className="text-sm leading-normal text-[#1b1b18] dark:border-[#3E3E3A] dark:text-[#EDEDEC]">home</Link>
                            <Link href={"#"} className="text-sm leading-normal text-[#1b1b18] dark:border-[#3E3E3A] dark:text-[#EDEDEC]">home</Link>
                            {auth.user && (
                                <Link
                                    href={route('dashboard')}
                                    className="text-sm leading-normal text-[#1b1b18] dark:border-[#3E3E3A] dark:text-[#EDEDEC]"
                                >
                                    dashboard
                                </Link>
                            )}
                        </div>
                    </nav>
                </header>
                <main className="w-full max-w-xl space-y-6">
                    <h1 className="text-2xl font-semibold">My Portfolio</h1>
                    <p className="text-md text-neutral-900 dark:text-neutral-100">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem enim quam totam temporibus, nesciunt quis saepe quae commodi dolore voluptatum corrupti illo labore sit quidem possimus rerum, consequatur tenetur aut.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi, sapiente quis nam quod dicta doloribus deserunt necessitatibus ducimus. Officiis eos itaque placeat corporis eveniet blanditiis amet quas quidem perspiciatis!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam hic, cum aspernatur illo est architecto magni similique atque quos maxime facere quis dicta voluptates minus perferendis nihil veritatis deleniti aliquid.
                    </p>
                    {mockPosts.map((post) => (
                        <Link href={"#"} className='w-full flex flex-col md:flex-row space-x-0 md:space-x-2'>
                            <span className='text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums'>{post.date}</span>
                            <p className='text-neutral-900 dark:text-neutral-100 tracking-tight'>{post.title}</p>
                        </Link>
                    ))}
                </main>
            </div>
        </>
    );
}

