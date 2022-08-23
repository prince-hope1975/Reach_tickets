export type metadata = {
  name: string;
  unit_name?: string;
  description: string;
  image?: string;
  image_integrity?: string;
  properties?: {
    simple_property: string;
    rich_property: {
      name: string;
      value: "001";
      display_value: "001";
      class: "emphasis";
      css: {
        color: "#ffffff";
        "font-weight": "bold";
        "text-decoration": "underline";
      };
    };
    array_property: {
      name: string;
      value: [1, 2, 3, 4];
      class: "emphasis";
    };
  };
};
