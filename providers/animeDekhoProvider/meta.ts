import { Info, ProviderContext } from '../types';

export const getMeta = async function ({
  link,
  providerContext,
}: {
  link: string;
  providerContext: ProviderContext;
}): Promise<Info> {
  return {
    title: 'Sample Title',
    synopsis: 'Sample Synopsis',
    image: '',
    imdbId: '',
    type: 'series',
    linkList: [],
  };
};
