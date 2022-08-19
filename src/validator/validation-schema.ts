import * as Joi from 'joi';

const armsSchema = Joi.object({
  business_unit: Joi.string().alphanum().required(),
	source: Joi.string().alphanum().required(),
	action: Joi.string().alphanum().required(),
	is_key_action: Joi.boolean().required(),
  additional_data: Joi.array().items(Joi.object({ })),
  ip_address: Joi.string().ip({ version: ['ipv4'] }),
  client: Joi.object({
    client_name: Joi.string(),
    max_client_id: Joi.number(),
    arms_client_id: Joi.number(),
    ici_client_id: Joi.number(),
    sales_rep: Joi.string(),
    secondary_sales_rep: Joi.string(),
    arms_status: Joi.string(),
    arms_contract_amount_1: Joi.number(),
    arms_contract_amount_2: Joi.number(),
    arms_contract_amount_3: Joi.number(),
    is_internal: Joi.boolean(),
  }),
  user: Joi.object({
      first_name: Joi.string(),
      last_name:  Joi.string(),
      email:  Joi.string().email(),
      max_contact_number:  Joi.string(),
      ici_user_id: Joi.number(),
      arms_user_id: Joi.number(),
      amrs_status:  Joi.string(),
  }),
  arms_location: Joi.object( {
    arms_location_id: Joi.number(),
    arms_location_name: Joi.string()
  }),
  arms_company: Joi.object({
    arms_company_id: Joi.number(),
		arms_company_name: Joi.string(),
  }),
  arms_action: Joi.object({
    arms_action_id: Joi.number(),
		arms_action_name: Joi.string(),
		action_group: Joi.string(),
		product_group: Joi.string(),
		is_key_action: Joi.boolean()
  }),
});

const iciSchema = Joi.object({
  business_unit: Joi.string().alphanum().required(),
	source: Joi.string().alphanum().required(),
	action: Joi.string().alphanum().required(),
	is_key_action: Joi.boolean().required(),
  additional_data: Joi.array().items(Joi.object({ label: Joi.string(), value: Joi.string()})),
  ip_address: Joi.string().ip({ version: ['ipv4'] }),
  client: Joi.object({
    client_name: Joi.string(),
    max_client_id: Joi.number(),
    arms_client_id: Joi.number(),
    ici_client_id: Joi.number(),
    sales_rep: Joi.string(),
    secondary_sales_rep: Joi.string(),
    fd_status: Joi.string(),
    cnt_status: Joi.string(),
    ici_contract_amount_1: Joi.number(),
    ici_contract_amount_2: Joi.number(),
    ici_contract_amount_3: Joi.number(),
    is_internal: Joi.boolean(),
  }),
  user: Joi.object({
      first_name: Joi.string(),
      last_name:  Joi.string(),
      email:  Joi.string().email(),
      max_contact_number:  Joi.string(),
      ici_user_id: Joi.number(),
      arms_user_id: Joi.number(),
      ici_status:  Joi.string(),
  }),
  ici_subscription: Joi.object({
		ici_subscription_id: Joi.number(),
		ici_subscription_name: Joi.string(),
		service:Joi.string(),
		is_active_fd: Joi.boolean(),
		is_active_cnt: Joi.boolean(),
		fd_legacy_subscription_id: Joi.number(),
		cnt_legacy_subscription_id: Joi.number()
  }),
  ici_company: Joi.object({
    ici_company_id: Joi.number(),
    ici_company_name: Joi.string(),	
    is_active_fd: Joi.boolean(),
    is_active_cnt: Joi.boolean()
  }),
  ici_subsidary: Joi.object({
    ici_subsidary_id: Joi.number(),
		ici_subsidary_name: Joi.string(),
  }),
  ici_industry: Joi.object({
		ici_industry_id: Joi.number(),
		ici_industry_name: Joi.string(),
		is_active_fd: Joi.boolean(),
		is_active_cnt: Joi.boolean()
  }),
  ici_report: Joi.object({
		ici_report_id: Joi.number(),
		title: Joi.string(),
		summary: Joi.string(),
		published_date: Joi.string(),
		is_active: Joi.boolean()
  }),
  ici_section: Joi.object({
		ici_section_id: Joi.number(),
		ici_section_code: Joi.string(),
		ici_section_name: Joi.string(),
		parent_section: Joi.string()
  }),
});

export {
  armsSchema,
  iciSchema
}