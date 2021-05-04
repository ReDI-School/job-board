import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import jobsData from '../../mocks/jobs.json';

const mockFetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(jobsData),
    ok: true,
  })
);
global.fetch = mockFetch;

describe('Test Suite', () => {
  it('click on a button', async () => {
    const { findAllByTestId } = render(<App />);
    const jobs = await findAllByTestId('job');
    expect(mockFetch).toHaveBeenCalled();
    expect(jobs.length).toEqual(jobsData.jobs.length);

  });

  it('renders markdown', async () => {
    const { findByText } = render(<App />);
    const markdown = await findByText('Markdown');
    expect(markdown.nodeName).toEqual('EM');
  });
});
