export interface IPost {
  userid: number;
  id: number;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface ITodo {
  userid: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  to: string;
  activeClassName?: string;
}

export type NewPostInputs = {
  title: string,
  body: string,
};

export interface IUserData {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}