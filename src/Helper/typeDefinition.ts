
export type ListType = {
    _id: string|number,
    title: string,
    Description: string,
    type: "todo" | "progress" | "review" | "done",
    priority: "low" | "medium" | "high" | "veryHigh"
}
