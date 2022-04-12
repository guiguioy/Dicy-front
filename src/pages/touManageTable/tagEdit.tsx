import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import { Tag, Input } from 'antd';
import React, { useState } from 'react';
import { TweenOneGroup } from 'rc-tween-one';

const TagEdit: React.FC<any> = (props: any) => {
  const [state, setState] = useState<any>({
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    inputVisible: false,
    inputValue: '',
  });

  const handleClose = (removedTag: any) => {
    const tags = state.tags.filter((tag: any) => tag !== removedTag);
    console.log(tags);
    setState({ tags });
  };

  const showInput = () => {
    // setState({ inputVisible: true }, () => input.focus());
  };

  const handleInputChange = (e: any) => {
    setState({ inputValue: e.target.value });
  };

  const handleInputConfirm = () => {
    const { inputValue } = state;
    let { tags } = state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  const saveInputRef = (input: any) => {
    input = input;
  };

  const forMap = (tag: any) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };
  const { tags, inputVisible, inputValue } = state;
  const tagChild = tags.map(forMap);
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
            onComplete: (e: any) => {
              e.target.style = '';
            },
          }}
          leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
          appear={false}
        >
          {tagChild}
        </TweenOneGroup>
      </div>
      {inputVisible && (
        <Input
          ref={saveInputRef}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag onClick={showInput} className="site-tag-plus">
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  );
};
export default React.memo(TagEdit);
