import {
    DatagridConfigurable,
    ImageField,
    List,
    NumberField,
    ReferenceField,
    TextField,
    useRecordContext,
    TopToolbar,
    SelectColumnsButton,
    ExportButton,
    CreateButton,
} from 'react-admin';
import { PosterFilterSidebar } from './FilterList';

const PosterListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

const UrlField = ({ source }: { source: string }) => {
    const record = useRecordContext();
    if (!record) return null;
    return <a href={record[source]} target="_blank" rel="noopener noreferrer">{record[source]}</a>;
};

export const PosterList = () => (
    <List aside={<PosterFilterSidebar />} actions={<PosterListActions />}>
        <DatagridConfigurable rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="category_id" reference="categories">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <NumberField source="width" label="width(cm)" />
            <NumberField source="height" label="height(cm)" />
            <NumberField source="price" />
            <ImageField
                source="thumbnail"
                title="title"
                sx={{
                    "& img": { maxWidth: 80, maxHeight: 80, objectFit: "contain" },
                }}
            />
            <UrlField source="image" />
            <TextField source="description" />
            <NumberField source="stock" />
            <NumberField source="sales" sx={{ fontWeight: "bold" }} />
        </DatagridConfigurable>
    </List>
);