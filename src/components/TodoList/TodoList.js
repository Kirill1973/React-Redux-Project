import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Transition } from 'react-transition-group';
import TweenMax from 'gsap';
import Style from './TodoList.module.scss';
import './slide.css';
import TodoListItem from '../TodoListItem';
import Edit from '../Edit';

export default class TodoList extends Component {
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
        todoData, onDelete, onToggleDone, onToggleImportant, onToggleEdit, onEdit, editTerm,
      } = this.props;
      const elements = todoData.map((item) => {
        const {
          id, label, done, important, edit,
        } = item;
        let className = Style.TodoItem;
        if (done) {
          className += ` ${Style.Done}`;
        }
        if (edit) {
          return (
            <div key={id} className={className}>
              <Edit onToggleEdit={() => onToggleEdit(id)} id={id} onEdit={onEdit} editTerm={editTerm} />
            </div>
          );
        }
        return (
          <div key={id}>
            <Transition in={done} timeout={500} onEnter={this.handleDoneEnter} onExit={this.handleDoneExit}>
              <Transition in={important} timeout={500} onEnter={this.handleImportantEnter} onExit={this.handleImportantExit}>
                <div className={className}>
                  <TodoListItem
                    done={done}
                    important={important}
                    label={label}
                    onDelete={() => onDelete(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleEdit={() => onToggleEdit(id)}
                  />
                </div>
              </Transition>
            </Transition>
          </div>
        );
      });

      return (
        <div className={Style.TodoItems}>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="slide"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {elements}
          </ReactCSSTransitionGroup>
        </div>
      );
    }
}
