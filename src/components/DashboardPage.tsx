import { Flex, Stack } from '@mantine/core';

export const DasboardPage = () => {
    return (
      <Stack>
        <Flex gap="sm" direction="column" rowGap={8}>
          <iframe className='h-screen' src="http://10.9.67.97:3000/public-dashboards/b92ea8887dc341a19e998b514569903a?orgId=1&theme=light" width="100%" height="auto" frameBorder="0"></iframe>        
        </Flex>
      </Stack>
    )
}