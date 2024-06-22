import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOption: (sortOrder: SortOptions) => void;
  sortOption: string;
}

export interface SortOptions {
  value: string;
  label: string;
}

const SortSelector = ({
  onSelectSortOption: onSelectSortOrder,
  sortOption,
}: Props) => {
  const sortOrders: SortOptions[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {sortOption ? sortOption : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            onClick={() => {
              onSelectSortOrder(option);
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
