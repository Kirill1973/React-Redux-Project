import React, { Component } from 'react';
import TweenMax from 'gsap';
import cx from 'classnames';
import { Transition } from 'react-transition-group';
import Style from './RenderTasks.module.scss';
import TodoListItem from '../TodoListItem';

export default class RenderTasks extends Component {
    handleDoneEnter = (elem) => {
      TweenMax.fromTo(elem, 1, { y: -150 }, { y: 0 });
    }

    handleDoneExit = (elem) => {
      TweenMax.fromTo(elem, 1, { y: 150 }, { y: 0 });
    }

    handleImportantEnter = (elem) => {
      TweenMax.fromTo(elem, 1, { y: 150 }, { y: 0 });
    }

    handleImportantExit = (elem) => {
      TweenMax.fromTo(elem, 1, { y: -150 }, { y: 0 });
    }

    render() {
      const {
        item, onDelete, onToggleDone, onToggleImportant, onToggleEdit, onEdit,
      } = this.props;
      const {
        id, label, done, important, edit,
      } = item;
      const className = cx(Style.TodoItem, {
        [Style.Done]: done,
      });
      return (
        <div>
          <Transition in={done} timeout={500} onEnter={this.handleDoneEnter} onExit={this.handleDoneExit}>
            <Transition
              in={important}
              timeout={500}
              onEnter={this.handleImportantEnter}
              onExit={this.handleImportantExit}
            >
              <div className={className}>
                <TodoListItem
                  id={id}
                  done={done}
                  edit={edit}
                  important={important}
                  label={label}
                  onDelete={() => onDelete(id)}
                  onToggleDone={() => onToggleDone(id)}
                  onToggleImportant={() => onToggleImportant(id)}
                  onToggleEdit={() => onToggleEdit(id)}
                  onEdit={onEdit}
                />
              </div>
            </Transition>
          </Transition>
        </div>
      );
    }
}
