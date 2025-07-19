import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "../../../src/domain/use-cases/answer-question";
import { AnswerRepository } from "../../../src/domain/repositories/answer-repository";
import { Answer } from "../../../src/domain/entities/answer";

const fakeAnswersRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository);

  const answer = await answerQuestion.execute({
    questionId: "1",
    instructorId: "1",
    content: "New response",
  });

  expect(answer.content).toEqual("New response");
});
