import { CommonModule } from './fuz-common.module';

describe('CommonModule', () => {
  let commonModule: CommonModule;

  beforeEach(() => {
    commonModule = new CommonModule();
  });

  it('should create an instance', () => {
    expect(commonModule).toBeTruthy();
  });
});
