export interface IndividualResult {
    isp: string;
    download_size: number;
    download_duration: number;
    download_speed: number;
    when: string;
}

export interface ResultState {
    results: IndividualResult[];
}
