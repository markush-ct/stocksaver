import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { DataTable } from '@/components/ui/data-table';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import { CategoryColumnsTable } from './Partials/category-columns-table';

export default function IndexPage() {
    const data = [
        {
            id: 123,
            name: 'Category name',
            description: 'Category description',
        },
    ];

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

            <Card>
                <CardHeader>
                    <CardTitle>Categories</CardTitle>
                    <CardDescription>
                        Here's a list of categories.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DataTable
                        columns={CategoryColumnsTable}
                        data={data}
                        columnToFilter="name"
                    />
                </CardContent>
            </Card>
        </DashboardLayout>
    );
}
