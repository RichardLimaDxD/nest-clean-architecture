export class Slug {
  public value: string;

  constructor(value: string) {
    this.value = value;
  }

  static createFromText(text: string) {
    const slugText: string = text
      .normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/_/g, "-")
      .replace(/--+/g, "-")
      .replace(/-$/g, "");

    return new Slug(slugText);
  }
}
