import { Select } from '@mantine/core';

interface Props {
  label: string;
  data: string[];
  value: string;
  onChange: (val: string) => void;
}

export function FilterSelect({ label, data, value, onChange }: Props) {
  return (
    <Select
      label={label}
      placeholder={`Select ${label}`}
      data={data}
      value={value}
      onChange={(v) => onChange(v || '')}
      size="md"
      searchable
// nothingFound="No options"
      withAsterisk
      w={220}
    />
  );
}
