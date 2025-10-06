import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <AppLayout>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum ducimus esse, quo quisquam illo tenetur vitae eligendi inventore
                magni hic similique odit, aperiam nam tempora id nobis sapiente dolores.
            </div>
        </AppLayout>
    );
}
