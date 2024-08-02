import { expect, test } from '@playwright/test';

test.describe('나의 대시보드 페이지(MD)를 테스트한다', () => {
  let page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();
    await page.goto('https://www.startupvalley.site/dashboard');
  });

  test('MD-2. 내 정보 수정 버튼을 클릭하면 나의 대시보드로 이동한다.', async () => {
    await page.locator('#edit-profile-button').click();
    await expect(page).toHaveURL(/.*\/dashboard\/edit/);
  });

  test('MD-3-1. 최소값을 0으로, 최대값을 해당 유저가 활동한 최대 시간으로 잡아 작업 척도 색상을 기록한다', async () => {
    const minValue = await page.evaluate(() =>
      document.querySelector('.task-scale').getAttribute('data-min'),
    );
    const maxValue = await page.evaluate(() =>
      document.querySelector('.task-scale').getAttribute('data-max'),
    );

    expect(Number(minValue)).toBe(0);
    expect(Number(maxValue)).toBeGreaterThan(0); // Assuming max should be greater than 0
  });

  test('MD-3-2. 비공개로 전환한 프로젝트의 업무도 커밋 박스에 포함된다.', async () => {
    const privateProjectCommits = await page.locator('.commit-box.private-project');
    await expect(privateProjectCommits).toBeVisible();
  });

  test('MD-3-4. 프로젝트 리스트를 클릭하면 백로그 모달을 표출한다.', async () => {
    await page.locator('.project-list-item').first().click();
    await expect(page.locator('.backlog-modal')).toBeVisible();
  });

  test('MD-4-1. 진행상황은 리뷰 작성, 진행중, 완료로 표출된다.', async () => {
    const statuses = await page.locator('.status').allTextContents();
    expect(statuses).toContain('리뷰 작성');
    expect(statuses).toContain('진행중');
    expect(statuses).toContain('완료');
  });

  test('MD-4-2. 나의 역할 수정을 클릭하면 역할을 수정할 수 있는 모달이 열린다.', async () => {
    await page.locator('#edit-role-button').click();
    await expect(page.locator('.role-edit-modal')).toBeVisible();
  });

  test('MD-6. 전체 프로젝트를 조회할 때 진행중인 프로젝트를 상단에 배치한다', async () => {
    const projectStatuses = await page.locator('.project-status').allTextContents();
    const inProgressFirst = projectStatuses[0] === '진행중';
    expect(inProgressFirst).toBe(true);
  });
});
