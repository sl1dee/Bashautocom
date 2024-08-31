import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {Button} from "@consta/uikit/Button";

import Fields from "./Fields/Fields";

import cl from './callbackForm.module.scss'
import cn from 'classnames'

import {query} from "../../../store/async/async";

const CallbackForm = ({ title, mobileTitle, description, mobileDescription, image, buttonText, fields, background }) => {

	const [isOpen, setIsOpen] = useState(false);

	const [fieldsValue, setFieldsValue] = useState([...fields]);

	const changeFieldData = (fieldData) => {
		let newElement = [...fieldsValue];
		let fieldValueIndex = newElement.findIndex(fieldVal => fieldVal.name === fieldData.name);

		newElement[fieldValueIndex].value = fieldData.value;

		setFieldsValue(newElement);
	}

	const submitForm = () => {
		let isEqual = 1;

		let fd = new FormData();

		let newValues = [...fieldsValue];

		let setAlertIsRequired = (index) => {
			newValues[index].caption = 'Заполните обязательное поле';
			newValues[index].status = 'alert';
		};

		let removeAlertIsRequired = (index) => {
			delete newValues[index].caption;
			delete newValues[index].status;
		};

		fieldsValue.forEach((field, index) => {
			if(field?.required){
				switch (field.type) {
					case 'text': {
						if(field.value?.length){
							removeAlertIsRequired(index);
							fd.append(field.name, field.value);
						}else{
							setAlertIsRequired(index);
							isEqual = 0;
						}
					} break;
					case 'phone': {
						if(field.value?.length && field.value.split(/[-_()^\s*$]+/).join('').length === 11){
							removeAlertIsRequired(index);
							fd.append(field.name, field.value.split(/[-_()^\s*$]+/).join(''));
						}else{
							setAlertIsRequired(index);
							isEqual = 0;
						}
					} break;
					case 'select': {
						if(field?.value?.label){
							removeAlertIsRequired(index);
							fd.append(field.name, field.value.label);
						}else{
							setAlertIsRequired(index);
							isEqual = 0;
						}
					} break;
					case 'dateRange': {
						if(field?.value?.from && field?.value?.to){
							removeAlertIsRequired(index);
							fd.append(`${field.name}Start`, field.value.from);
							fd.append(`${field.name}End`, field.value.to);
						}else{
							setAlertIsRequired(index);
							isEqual = 0;
						}
					} break;
				}
			}else{
				switch (field.type) {
					case 'text': {
						if (field.value?.length) {
							fd.append(field.name, field.value);
						}
					} break;
					case 'phone': {
						if (field.value?.length && field.value.split(/[-_()^\s*$]+/).join('').length === 11) {
							fd.append(field.name, field.value.split(/[-_()^\s*$]+/).join(''));
						}
					} break;
					case 'select': {
						if (field?.value?.label) {
							fd.append(field.name, field.value.label);
						}
					} break;
					case 'dateRange': {
						if(field?.value?.from || field?.value?.to){
							if(field?.value?.from){
								fd.append(`${field.name}Start`, field.value.from);
							}
							if(field?.value?.to){
								fd.append(`${field.name}End`, field.value.to);
							}
						}
					} break;
				}
			}
		})

		setFieldsValue(newValues);

		if(isEqual){
			query('/api', fd)
		}
	}

	return (
		<>
			<div className={cl.signUp}>
				<div className="container p-0">
					<div className={cn([cl.signUpInformation, 'd-flex flex-column flex-lg-row justify-content-center w-100', background === 'dark' ? cl.darkBackground : cl.lightBackground])}>
						<div className={cn([cl.signUpInformationModal, 'd-flex flex-column'])}>
							<div className={cn([cl.signUpInformationModalBlock1, 'd-flex flex-column'])}>
								<p className={cn(cl.title, "mb-0")} dangerouslySetInnerHTML={{__html: title}}/>
								{description && <p className={cn(cl.description, "mb-0")} dangerouslySetInnerHTML={{__html: description}}/>}
							</div>
							<div className={cn([cl.signUpInformationModalBlock2, 'd-none d-sm-flex flex-column'])}>
								{
									fieldsValue?.length && fieldsValue.map((field, index) =>{
										return <Fields fieldData={field} key={index} setValue={changeFieldData} value={ field?.value ?? null }/>
									})
								}
							</div>
							<div className={cn([cl.signUpInformationModalBlock3, 'd-none d-sm-flex flex-column'])}>
								<Button onClick={submitForm} label={buttonText} width='full' size='l'/>
								<p className={cn([cl.policy, 'd-none d-sm-flex flex-column text-center mb-0'])}>
									Нажимая на кнопку, вы соглашаетесь с
									<Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">Политикой конфиденциальности</Link>
								</p>
							</div>
							<div className={cn([cl.signUpInformationModalBlock3, 'd-sm-none'])}>
								<Button onClick={() => setIsOpen(true)} label={buttonText} width='full' size='s'/>
							</div>
						</div>
						<img src={image} alt="" />
					</div>
				</div>
			</div>

			<div className={cn([cl.modal, 'd-flex flex-column d-sm-none d-flex justify-content-center align-items-center', isOpen && cl.modalActive])}>
			    <div className={cn([cl.modalBackground])} onClick={() => setIsOpen(false)}/>
			    <div className={cn([cl.modalContent, 'd-flex flex-column'])}>
					<div onClick={() => setIsOpen(false)} className={cl.modalCloser}><img src='/assets/img/fast-sign-up/close.svg' alt="×" /></div>
					<div className={cn(cl.modalContentHeader, 'd-flex align-items-center justify-content-between')}>
						<p className={cn(cl.title, 'mb-0')} dangerouslySetInnerHTML={{__html: mobileTitle ?? title}}/>
						<p className={cn(cl.description, 'mb-0')} dangerouslySetInnerHTML={{__html: mobileDescription}}/>
					</div>
					<div className={cn([cl.modalContentInputs, 'd-flex flex-column'])}>
						{
							fieldsValue?.length && fieldsValue.map((field, index) =>{
								return <Fields fieldData={field} key={index} setValue={changeFieldData} value={ field?.value ?? null } size='s'/>
							})
						}
					</div>
					<div className={cn([cl.modalContentGroup, 'd-flex flex-column'])}>
						<Button onClick={submitForm} label={buttonText} width='full' size='s'/>
						<p className={cn([cl.policy, 'text-center mb-0'])}>
							Нажимая на кнопку, вы соглашаетесь с
							<Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">Политикой конфиденциальности</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default CallbackForm
