package com.liferay.tiktok.web;

import com.liferay.headless.delivery.dto.v1_0.Document;
import com.liferay.portal.vulcan.jaxrs.context.EntityExtensionContext;
import com.liferay.portal.vulcan.jaxrs.context.ExtensionContext;
import org.osgi.service.component.annotations.Component;

import javax.ws.rs.ext.ContextResolver;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@Component(
	property = {
		"osgi.jaxrs.application.select=(osgi.jaxrs.name=Liferay.Headless.Delivery)",
		"osgi.jaxrs.extension=true",
		"osgi.jaxrs.name=Liferay.Headless.Delivery.TikTokContextResolver"
	},
	service = ContextResolver.class
)
public class TikTokContextResolver implements
	ContextResolver<ExtensionContext> {

	@Override
	public ExtensionContext getContext(Class<?> type) {
		if (Document.class.isAssignableFrom(type)) {
			return new DocumentExtensionContext();
		}
		return null;
	}

	public static class DocumentExtensionContext
		extends EntityExtensionContext<Document> {

		@Override
		public Map<String, Object> getEntityExtendedProperties(
			Document document) {
			Map<String, Object> extendedProperties = new HashMap<>();
			extendedProperties.put("version", "1.0");
			return extendedProperties;
		}

		@Override
		public Set<String> getEntityFilteredPropertyKeys(Document document) {
			Set<String> filteredProperties = new HashSet<>();
			filteredProperties.add("title");
			return filteredProperties;
		}
	}
}