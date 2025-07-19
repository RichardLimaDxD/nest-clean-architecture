import { AnswerQuestionUseCase } from "@/domain/use-cases/answer-question";
import { AnswerRepository } from "@/domain/repositories/answer-repository";
import { Answer } from "@/domain/entities/answer";

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
