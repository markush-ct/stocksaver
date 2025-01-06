import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function IndexPage() {
    const breadcrumbs = [
        {
            label: 'Dashboard',
            routeName: 'dashboard',
        },
        {
            label: 'Overview',
        },
    ];

    return (
        <DashboardLayout breadcrumbs={breadcrumbs}>
            <Head title="Overview" />

            <h1>Dashboard index page</h1>
        </DashboardLayout>
    );
}
