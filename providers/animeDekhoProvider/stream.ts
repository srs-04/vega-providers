import { Stream, ProviderContext } from '../types';

export const getStream = async function ({
  link,
  providerContext,
}: {
  link: string;
  providerContext: ProviderContext;
}): Promise<Stream[]> {
  const streams: Stream[] = [];
  return streams;
};
