import { Slug } from "@/domain/entities/value-objects/slug";

test("it should be able to create a new slug from text", () => {
  const slug = Slug.createFromText("Example question title");

  expect(slug.value).toEqual("example-question-title");
});
