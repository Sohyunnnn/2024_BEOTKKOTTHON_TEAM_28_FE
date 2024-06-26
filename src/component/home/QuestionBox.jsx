import { Box, Button, Flex, Image } from '@chakra-ui/react';

import { getWaitingQuestions } from '../../api/teamhistory';
import { returnProfileImg } from '../../lips/returnProfile';
import tomato from '../../assets/tomato.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const QuestionBox = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getWaitingQuestions(id);

      setData(response);
    };

    fetchData();
  }, [id]);

  return (
    <Flex direction='column' gap='16px'>
      <Box className='SubHead-xl'>답변을 기다리는 요청</Box>
      <Flex
        direction='column'
        gap='12px'
        width='276px'
        marginBottom='12px'
        //background='#F0F2F4'
        background='white'
        border='1px solid #CCD6E3'
        padding='12px'
        borderRadius='12px'
      >
        {!data || (data?.length === 0 && '아직 요청이 없어요!')}
        {data?.map((el) => {
          return (
            <Flex gap='8px' key={el.sender.id}>
              <Image
                borderRadius='50%'
                src={returnProfileImg(el.sender.profileImage) ?? tomato}
                alt='프로필'
                width='48px'
              />
              <Flex direction='column'>
                <Box className='SubHead-lg'>
                  {' '}
                  {el.sender.content.length <= 10
                    ? el.sender.content
                    : el.sender.content.substring(0, 10) + '...'}
                </Box>
                <Box className='SubHead-md' color='brandBold'>
                  {el.sender.part}
                </Box>
              </Flex>
            </Flex>
          );
        })}
        <Button
          variant='greenGreen'
          width='100%'
          onClick={() => {
            navigate(`/${id}/task-history`);
          }}
          border='1px solid #059669'
        >
          더보기
        </Button>
      </Flex>
    </Flex>
  );
};

export default QuestionBox;
