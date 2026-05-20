import { DataTable, List, ReferenceField } from 'react-admin';

export const PosterList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="category_id">
                <ReferenceField source="category_id" reference="categories" />
            </DataTable.Col>
            <DataTable.Col source="title" />
            <DataTable.NumberCol source="width" />
            <DataTable.NumberCol source="height" />
            <DataTable.NumberCol source="price" />
            <DataTable.Col source="thumbnail" />
            <DataTable.Col source="image" />
            <DataTable.Col source="description" />
            <DataTable.NumberCol source="stock" />
            <DataTable.NumberCol source="sales" />
        </DataTable>
    </List>
);