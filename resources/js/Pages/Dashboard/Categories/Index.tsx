import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function IndexPage() {
    const breadcrumbs = [
        {
            label: 'Dashboard',
            routeName: 'dashboard',
        },
        {
            label: 'Categories',
        },
    ];

    return (
        <DashboardLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />

            <h1>Dashboard categories index page</h1>
        </DashboardLayout>
    );
}
