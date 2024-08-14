export interface ILicense {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
}

export interface IItem {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    forks_count: number;
    language: string;
    license: ILicense;
    stargazers_count: number;
    updated_at: string;
}

export interface GitHubApiResponse {
    total_count: number;
    incomplete_results: boolean;
    items: IItem[];
}
