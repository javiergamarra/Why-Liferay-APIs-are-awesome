package com.liferay.tiktok.web;

import com.liferay.headless.delivery.dto.v1_0.Document;
import com.liferay.portal.vulcan.jaxrs.context.EntityExtensionContext;
import com.liferay.portal.vulcan.jaxrs.context.ExtensionContext;
import org.osgi.service.component.annotations.Component;

import javax.ws.rs.ext.ContextResolver;
import java.util.Collections;
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
		if (type.isAssignableFrom(Document.class)) {
			return new EntityExtensionContext<Document>() {
				@Override
				public Map<String, Object> getEntityExtendedProperties(Document entity) {
					return Collections.singletonMap("shares", "100");
				}

				@Override
				public Set<String> getEntityFilteredPropertyKeys(Document entity) {
					return Collections.singleton("relatedContents");
				}
			};
		}

		return null;
	}
}