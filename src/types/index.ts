export type BlogList = {
  object: string;
  results: Result[];
  next_cursor?: any;
  has_more: boolean;
  type: string;
};

export type Result = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Createdby;
  last_edited_by: Createdby;
  cover: Cover;
  icon: Icon;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  public_url?: any;
};

interface Properties {
  slug: PlanText;
  category: { multi_select: multi_select[] };
  status: Category;
  Date: Date2;
  Name: Name;
  tldr: PlanText;
}

export interface multi_select {
  id: string;
  name: string;
  color: string;
}

interface Name {
  id: string;
  type: string;
  title: Title[];
}

interface Title {
  type: string;
  text: Text2;
  annotations: Annotations2;
  plain_text: string;
  href?: any;
}

interface Annotations2 {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

interface Text2 {
  content: string;
  link?: any;
}

interface Date2 {
  id: string;
  type: string;
  date: Date;
}

interface Date {
  start: string;
  end?: any;
  time_zone?: any;
}

interface Category {
  id: string;
  type: string;
  select: Select;
}

interface Select {
  id: string;
  name: string;
  color: string;
}

interface PlanText {
  id: string;
  type: string;
  rich_text: Richtext[];
}

interface Richtext {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any;
}

interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  'color ': string;
}

interface Text {
  'cont ent': string;
  link?: any;
}

interface Parent {
  type: string;
  database_id: string;
}

interface Icon {
  type: string;
  emoji: string;
}

interface Cover {
  type: string;
  external: {
    url: string;
  };
  file: {
    url: string;
  };
}

interface Createdby {
  object: string;
  id: string;
}
