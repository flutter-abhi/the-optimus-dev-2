import Link from "next/link"

export default function BlogPage() {
    return (
        <div className="container px-4 py-16 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Blog</h1>
                <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Stay updated with the latest insights, trends, and news in technology and development.
                </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {/* Blog Categories */}
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
                    <h3 className="text-xl font-bold">Web Development</h3>
                    <p className="text-sm text-zinc-500">Latest trends in web development</p>
                    <Link href="/blog/category/web-development" className="text-sm font-medium text-zinc-900 hover:underline">
                        View articles →
                    </Link>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
                    <h3 className="text-xl font-bold">Mobile Development</h3>
                    <p className="text-sm text-zinc-500">Insights into mobile app development</p>
                    <Link href="/blog/category/mobile-development" className="text-sm font-medium text-zinc-900 hover:underline">
                        View articles →
                    </Link>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
                    <h3 className="text-xl font-bold">Design</h3>
                    <p className="text-sm text-zinc-500">UI/UX design best practices</p>
                    <Link href="/blog/category/design" className="text-sm font-medium text-zinc-900 hover:underline">
                        View articles →
                    </Link>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
                    <h3 className="text-xl font-bold">Technology</h3>
                    <p className="text-sm text-zinc-500">Emerging tech trends</p>
                    <Link href="/blog/category/technology" className="text-sm font-medium text-zinc-900 hover:underline">
                        View articles →
                    </Link>
                </div>
            </div>
            <div className="mx-auto max-w-5xl space-y-8">
                {/* Featured Blog Posts */}
                <div className="grid gap-6 md:grid-cols-2">
                    <article className="rounded-lg border p-6">
                        <h2 className="text-2xl font-bold">The Future of Web Development</h2>
                        <p className="mt-2 text-zinc-500">
                            Exploring the latest trends and technologies shaping the future of web development.
                        </p>
                        <Link href="/blog/future-of-web-development" className="mt-4 inline-block text-sm font-medium text-zinc-900 hover:underline">
                            Read more →
                        </Link>
                    </article>
                    <article className="rounded-lg border p-6">
                        <h2 className="text-2xl font-bold">Building Responsive Web Applications</h2>
                        <p className="mt-2 text-zinc-500">
                            Best practices for creating responsive and mobile-friendly web applications.
                        </p>
                        <Link href="/blog/responsive-web-applications" className="mt-4 inline-block text-sm font-medium text-zinc-900 hover:underline">
                            Read more →
                        </Link>
                    </article>
                    <article className="rounded-lg border p-6">
                        <h2 className="text-2xl font-bold">Mobile App Performance Optimization</h2>
                        <p className="mt-2 text-zinc-500">
                            Tips and techniques for improving mobile app performance and user experience.
                        </p>
                        <Link href="/blog/mobile-app-performance" className="mt-4 inline-block text-sm font-medium text-zinc-900 hover:underline">
                            Read more →
                        </Link>
                    </article>
                    <article className="rounded-lg border p-6">
                        <h2 className="text-2xl font-bold">Desktop Application Development</h2>
                        <p className="mt-2 text-zinc-500">
                            A comprehensive guide to modern desktop application development.
                        </p>
                        <Link href="/blog/desktop-application-development" className="mt-4 inline-block text-sm font-medium text-zinc-900 hover:underline">
                            Read more →
                        </Link>
                    </article>
                </div>
                <div className="text-center">
                    <Link href="/blog/archive" className="inline-block rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">
                        View All Articles
                    </Link>
                </div>
            </div>
        </div>
    )
} 